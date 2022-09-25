import emailjs from "@emailjs/browser";

export const fetchData = (form) => {
  emailjs.sendForm('service_9d6i94r', 'template_l6087hv', form, '7BofRpvpo-Ie2e1d0')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}
