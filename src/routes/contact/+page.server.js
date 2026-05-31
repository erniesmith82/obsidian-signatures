import { fail, redirect } from '@sveltejs/kit';
import { Resend } from 'resend';
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

		const resend = new Resend(env.RESEND_API_KEY);

		await resend.emails.send({
			from: env.RESEND_FROM || 'Obsidian Website <info@obsidiansignatures.com>',
			to: env.INFO_TO || 'info@obsidiansignatures.com',
			replyTo: email,
			subject: service
				? `New Contact Message - ${service}`
				: `New Contact Message`,
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