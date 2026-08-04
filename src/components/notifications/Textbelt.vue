<template>
    <div class="mb-3">
        <label for="textbelt-api-key" class="form-label">{{ $t("API Key") }}</label>
        <HiddenInput
            id="textbelt-api-key"
            v-model="$parent.notification.textbeltApiKey"
            :required="true"
            autocomplete="new-password"
        ></HiddenInput>
        <div class="form-text">
            Get an API key from
            <a href="https://textbelt.com/" target="_blank" rel="noopener noreferrer">Textbelt</a>.
            Append <code>_test</code> to the key to validate without consuming SMS credit.
        </div>
    </div>

    <div class="mb-3">
        <label for="textbelt-phone" class="form-label">{{ $t("Recipient Number") }}</label>
        <input
            id="textbelt-phone"
            v-model="$parent.notification.textbeltPhone"
            type="text"
            class="form-control"
            required
            autocomplete="tel"
            placeholder="+15551234567"
        />
        <div class="form-text">Use E.164 format for international numbers.</div>
    </div>

    <div class="mb-3">
        <label for="textbelt-sender" class="form-label">{{ $t("From Name/Number") }}</label>
        <input
            id="textbelt-sender"
            v-model="$parent.notification.textbeltSender"
            type="text"
            class="form-control"
            autocomplete="organization"
            placeholder="Uptime Kuma"
        />
        <div class="form-text">
            Optional sender name used by Textbelt for compliance. It does not change the SMS phone number.
        </div>
    </div>
</template>

<script>
import HiddenInput from "../HiddenInput.vue";

export default {
    components: {
        HiddenInput,
    },
};
</script>
