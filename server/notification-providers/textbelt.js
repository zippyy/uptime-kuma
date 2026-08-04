const NotificationProvider = require("./notification-provider");
const axios = require("axios");

class Textbelt extends NotificationProvider {
    name = "Textbelt";

    /**
     * @inheritdoc
     */
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        const data = {
            phone: notification.textbeltPhone,
            message: msg,
            key: notification.textbeltApiKey,
        };

        if (notification.textbeltSender) {
            data.sender = notification.textbeltSender;
        }

        try {
            const config = this.getAxiosConfigWithProxy({
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const response = await axios.post("https://textbelt.com/text", data, config);

            if (!response.data?.success) {
                throw new Error(response.data?.error || "Textbelt rejected the message");
            }

            if (response.data.quotaRemaining !== undefined) {
                return `Sent Successfully. ${response.data.quotaRemaining} SMS credits remaining.`;
            }

            return "Sent Successfully.";
        } catch (error) {
            this.throwGeneralAxiosError(error);
        }
    }
}

module.exports = Textbelt;
