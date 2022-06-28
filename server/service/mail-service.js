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

	async sendActivationMail(to, token, target, username, password) {
		let subject
		let html
		const date = new Date().toLocaleString()

		if (target === 'registration') {
			subject = 'Подтверждение регистрации на сайте bike-caucasus.ru'
			html = `Здравствуйте!<br>
    ${date} была произведена регистрация на сайте bike-caucasus.ru, где был указан данный e-mail ${to}.<br>
    Для активации учетной записи перейдите по ссылке <a href='${HOST}/api/activate/${token}'>${HOST}/api/activate/${token}</a> <br><br>
    Логин: ${username}<br>
    Пароль: ${password}<br><br>
    <b>Внимание!</b> Ссылка действительна 48 часов. Без активации аккаунт будет удалён.<br><br>С уважением, команда Bike-Caucasus.`
		}
		if (target === 'resetPassword') {
			subject = 'Сброс пароля на сайте bike-caucasus.ru'
			html = `Здравствуйте!<br>
    ${date} был произведен запрос на сброс пароля профиля на сайте <a href='bike-caucasus.ru'>bike-caucasus.ru</a>, где был указан данный e-mail <b>${to}</b>.<br>
    Для сброса пароля перейдите по ссылке <a href='${HOST}/api/new-password/${token}'>${HOST}/api/new-password/${token}</a><br><br>
    <b>Внимание!</b> Ссылка действительна 48 часов. Если Вы не делали данного запроса, то просто проигнорируйте это письмо.<br><br>С уважением, команда Bike-Caucasus.`
		}
		if (target === 'savedNewPassword') {
			subject = 'Обновление пароля профиля на сайте bike-caucasus.ru'
			html = `Здравствуйте!<br>
    ${date} было произведено обновления пароля профиля на сайте bike-caucasus.ru<br><br>
    Логин: ${username}<br>
    Новый пароль: ${password}<br><br>
    С уважением, команда Bike-Caucasus.`
		}

		let result = await this.transporter.sendMail({ from: MAIL_USER, to, subject, html })

		console.log('Message sent: %s', result.messageId)

		return result.messageId
	}
}

export default new MailService()
