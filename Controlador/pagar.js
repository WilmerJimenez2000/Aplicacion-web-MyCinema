$(document).ready(function () {
    var valor = localStorage.getItem('total')
    paypal.Button.render({
        env: 'sandbox',
        client: {
            sandbox: 'AYkgaRFhHMHicDoLDzj43yFwclILjX6XfHoaopdwhwwY4BzftyvvegQgTZmuD4FW_Jgp_6NnNSUkP7Bs'
        },
        commit: true,
        payment: function (data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [{
                        amount: {
                            total: valor,
                            currency: 'USD'
                        }
                    }]
                }

            });
        },
        onAuthorize: function (data, actions) {
            return actions.payment.execute().then(function () {
                window.alert('Pago completado. Se envió los boletos a su correo!');
                location.href="../INICIO/index.html";
                
                //localStorage.setItem("confirmarPago", true);
            });
        }
    }, '#paypal-button-container');
});
