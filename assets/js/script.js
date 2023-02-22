const coupons = document.querySelectorAll('.wu-coupon');

coupons.forEach((coupon) => {
    coupon.querySelector('.wu-coupon__right_arrow').addEventListener('click', (e)=> {
        if(e.currentTarget.classList.contains('wu-coupon__right_arrow')){
            coupon.querySelector('.wu-coupon__hid').classList.add('wu-coupon__hid--active');
        }
    });
});

coupons.forEach((coupon) => {
    coupon.querySelector('.wu-coupon__right_arrow--left').addEventListener('click', (e)=> {
        if(e.currentTarget.classList.contains('wu-coupon__right_arrow--left')){
            coupon.querySelector('.wu-coupon__hid').classList.remove('wu-coupon__hid--active');
        }
    });
});
