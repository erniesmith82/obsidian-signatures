import { fail, redirect } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = String(data.get('name') || '').trim();
		const email = String(data.get('email') || '').trim();
		const phone = String(data.get('phone') || '').trim();
		const service = String(data.get('service') || '').trim();
		const appointmentDate = String(data.get('appointmentDate') || '').trim();
		const appointmentTime = String(data.get('appointmentTime') || '').trim();
		const location = String(data.get('location') || '').trim();
		const message = String(data.get('message') || '').trim();

		if (!name || !email || !phone || !service || !appointmentDate || !appointmentTime || !location) {
			return fail(400, {
				error: 'Please complete all required fields.'
			});
		}

		if (env.MAIL_TEST === 'true') {
			console.log('New appointment request:', {
				name,
				email,
				phone,
				service,
				appointmentDate,
				appointmentTime,
				location,
				message
			});

			throw redirect(303, '/confirmation');
		}

		const transporter = nodemailer.createTransport({
			host: env.SMTP_HOST,
			port: Number(env.SMTP_PORT || 587),
			secure: false,
			auth: {
				user: env.SMTP_USER,
				pass: env.SMTP_PASS
			}
		});

		await transporter.sendMail({
			from: `"Obsidian Website" <${env.SMTP_FROM}>`,
			to: env.APPOINTMENTS_TO || env.INFO_TO || env.SMTP_FROM,
			replyTo: email,
			subject: `New Appointment Request: ${service}`,
			text: `
New appointment request submitted from obsidiansignatures.com

Name: ${name}
Email: ${email}
Phone: ${phone}

Service Needed: ${service}
Preferred Date: ${appointmentDate}
Preferred Time: ${appointmentTime}
Location: ${location}

Message:
${message || 'No message provided.'}
			`
		});

		throw redirect(303, '/confirmation');
	}
};