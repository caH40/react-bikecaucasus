import 'dotenv/config'
import nodemailer from 'nodemailer'

const { MAIL_USER, MAIL_PASS, MAIL_HOST, MAIL_PORT, MAIL_SECURE, HOST } = process.env

class MailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: MAIL_HOST,
			port: MAIL_PORT,
			secure: MAIL_SECURE,
			auth: {
				user: MAIL_USER,
				pass: MAIL_PASS,
			},
		})
	}

	async sendActivationMail(to, link) {
		console.log(to)
		let result = await this.transporter.sendMail({
			from: MAIL_USER,
			to,
			subject: `Сброс пароля на сайте bk`,
			html: `Здравствуйте!<br><a href="${HOST}/api/activate/${link}">${HOST}/${link}</a>`,
		})
		return result.messageId
	}
}

export default new MailService()
