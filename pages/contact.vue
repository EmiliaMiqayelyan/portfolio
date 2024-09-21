<template>
  <div class="w-full flex justify-content-center gap-3 pt-3">
    <info-bar/>

    <div class="main-discover-section p-4 pt-5 relative">
      <lazy-header/>
      <div>
        <div>
          <h3 class="mt-0">Contact information</h3>

          <div class="flex justify-content-between flex-wrap gap-3 mt-4">
            <div class="services p-4 w-26rem text-sm">
              <div class="flex justify-content-between">
                <span>Country:</span>
                <span class="opacity-50">Armenia</span>
              </div>

              <div class="flex justify-content-between mt-2">
                <span>City:</span>
                <span class="opacity-50">Yerevan</span>
              </div>
            </div>

            <div class="services p-4 w-26rem text-sm">
              <div class="flex justify-content-between">
                <span>github:</span>
                <span class="opacity-50">emiliamiqayelyan</span>
              </div>

              <div class="flex justify-content-between mt-2">
                <span>linkedin:</span>
                <span class="opacity-50">Emilia Miqayelyan</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <h3>Get in touch</h3>

          <div class="contact-form p-4">
            <form @submit.prevent="sendEmail" class="flex flex-column row-gap-4">
              <InputGroup>
                <InputGroupAddon>
                  <img width="15" height="15" src="@/assets/user.png" alt=""/>
                </InputGroupAddon>
                <InputText v-model="form.name" placeholder="Name"/>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>
                  <img width="15" height="15" src="@/assets/message.png" alt=""/>
                </InputGroupAddon>
                <InputText v-model="form.email" placeholder="Email"/>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon>
                  <img width="15" height="15" src="@/assets/email.png" alt=""/>
                </InputGroupAddon>
                <Textarea v-model="form.message" placeholder="Message"/>
              </InputGroup>

              <div class="flex justify-content-end align-items-center">
                <button class="send-message mt-3 mb-6 font-medium cursor-pointer border-none h-3rem w-10rem">SEND
                  MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <lazy-footer/>
    </div>
  </div>
</template>

<script setup>
import emailjs from '@emailjs/browser';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const sendEmail = () => {
  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message
  };

  emailjs.send('service_mtmf1q4', 'template_wq1gbti', templateParams, {
    publicKey: 'D0LjXagDaRFtJJ0My',
  })
      .then(
          () => {
            console.log('SUCCESS!');

            form.value.name = '';
            form.value.email = '';
            form.value.message = '';
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
      );
};
</script>

<style scoped>
.main-discover-section {
  background-color: #1E1E28;
  color: white;
  width: 59rem;
}

.services {
  background-color: #292933;
}

.contact-form {
  background-color: #2C2C36;
}

.send-message {
  background-color: #FFC107;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
}

:deep(.p-inputgroup-addon) {
  background-color: #20202A;
  border-color: #20202A;
  color: #8C8C8E;
  padding: 1rem;
}

:deep(.p-inputtext) {
  background-color: #242430;
  border-color: #242430;
  color: white;
}

:deep(.p-inputtext::placeholder) {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
}

:deep(.p-inputtext:enabled:focus) {
  box-shadow: none;
}
</style>
