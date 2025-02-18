<template>
  <div>
    <div id="payment-form"></div>
    <!-- <script src="https://yookassa.ru/checkout-widget/v1/checkout-widget.js"></script> -->
  </div>
</template>

<script>
//import 'https://yookassa.ru/checkout-widget/v1/checkout-widget.js'
import * as custom from 'https://yookassa.ru/checkout-widget/v1/checkout-widget.js'
export default {
  name: 'Form_price',
  mounted() {
    const checkout = new window.YooMoneyCheckoutWidget({
      confirmation_token: '2f3e8421-000f-5000-b000-1c8562462e9f', //Токен, который перед проведением оплаты нужно получить от ЮKassa
      return_url: 'https://example.com/', //Ссылка на страницу завершения оплаты, это может быть любая ваша страница

      //При необходимости можно изменить цвета виджета, подробные настройки см. в документации
      //customization: {
      //Настройка цветовой схемы, минимум один параметр, значения цветов в HEX
      //colors: {
      //Цвет акцентных элементов: кнопка Заплатить, выбранные переключатели, опции и текстовые поля
      //control_primary: '#00BF96', //Значение цвета в HEX

      //Цвет платежной формы и ее элементов
      //background: '#F2F3F5' //Значение цвета в HEX
      //}
      //},
      error_callback: function (error) {
        console.log(error)
      }
    })

    //Отображение платежной формы в контейнере
    checkout.render('payment-form')
  }
}
</script>