
import React from 'react';

const Payment = () => {
  return (
    <div className='payment'>
      <h2 className='payment__title'>Вы можете помочь</h2>
      <p className='payment__text'>Если Вам близко по духу все чем мы занимаемся, то будем рады любой финансовой помощи от Вас.
        Все собранные средства будут потрачены на оказание помощи подопечным проектов Фонда “Диакония”. </p>
      <div className='payment__form'>
        <p className='payment__temp-text'>К сожалению, взнос пожертвований не доступен с текущего сайта, если вы хотите пожертвовать нам средства, то
          просим делать это на нашем основном сайте</p>
        <p className='payment__link_type_block'><a className='payment__link' href='https://diaconiafond.ru/pomoch/' target="_blank" rel="noreferrer" >Перейти к форме оплаты</a></p>
      </div>
    </div>
  );
};

export default Payment;
