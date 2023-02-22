const coupon__btn = document.querySelectorAll('.wu-coupon__right_arrow');
// const coupon__right = document.querySelectorAll('.wu-coupon__right_arrow--left');
const coupon__hidden = document.querySelectorAll('.wu-coupon__hid');

coupon__btn.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        coupon__hidden[index].classList.add('wu-coupon__hid--active');
        if (!item.classList.contains('wu-coupon__right_arrow--left')) {
            coupon__hidden[index].classList.add('wu-coupon__hid--active');
        } else if (item.classList.contains('wu-coupon__right_arrow--left')) {
            coupon__hidden[index].classList.remove('wu-coupon__hid--active');
        }
    })
})
// coupon__right.forEach((item, index) => {
//     item.addEventListener('click', () => {
//     })
// })