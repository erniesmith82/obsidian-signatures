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
		const message = String(data.get('message') || '').trim();

		if (!name || !email || !message) {
			return fail(400, {
				error: 'Please complete your name, email, and message.'
			});
		}

		if (env.MAIL_TEST === 'true') {
			console.log('New contact message:', {
				name,
				email,
				phone,
				service,
				message
			});

			throw redirect(303, '/contact-confirmation');
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
			to: env.INFO_TO || env.SMTP_FROM,
			replyTo: email,
			subject: `New Contact Message: ${name}`,
			text: `
New contact message submitted from obsidiansignatures.com

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Topic: ${service || 'Not selected'}

Message:
${message}
			`
		});

		throw redirect(303, '/contact-confirmation');
	}
};