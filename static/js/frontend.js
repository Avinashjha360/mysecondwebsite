        setTimeout(() => {
            document.getElementById('para1').innerHTML = 'Lorem ipsum dolor sit amet,';
        }, 2000);
        setTimeout(() => {
            let para2 = document.getElementById('para2')
            para2.innerHTML = 'consectetur adipisicing aut enimelit.';
        }, 3000);
        setTimeout(() => {
            document.getElementById('para3').innerHTML = 'Illo nostrum numquam  aspernatur eumplaceat';
        }, 4000);
        setTimeout(() => {
            document.getElementById('para4').innerHTML = 'sapiente iusto! eatae sapiente debitis aliquid! Deserunt,';
        }, 5000);

        function submenu() {
            let topnav = document.getElementById('topnav');
            topnav.style.height = '400px'

            let subm = document.getElementById('submenu');
            subm.style.display = 'block';
            subm.style.position = 'absolute';
            subm.style.marginLeft = '700px';
            let subm1 = document.querySelector('#submenu  ul');
            subm1.style.display = 'block';

            let item = document.getElementsByClassName('item');
            item[0].style.display = 'none';
            item[1].style.display = 'none';
            item[2].style.display = 'none';
            item[3].style.display = 'none';
            item[4].style.display = 'none';

        }

        function order() {
            let button = document.getElementById('button')
            button.innerHTML = "ORDERED"
            button.style.border = '2px solid blue';
            button.style.color = 'black';
            button.style.backgroundColor = 'white';
            setTimeout(() => {
                button.innerHTML = 'ORDER AGAIN'
            }, 4000);
            setTimeout(() => {
                button.innerHTML = "ORDER NOW";
                button.style.border = '2px solid red';
                button.style.color = 'red';
                button.style.backgroundColor = 'white';
            }, 7000);
        }

        let mobnav = document.getElementById('mobnav');
        let mobnavin = document.getElementById('mobnavin');
        let topnav = document.getElementById('topnav');
        function logoclick() {

            if (mobnav.style.animationPlayState != 'running') {
                mobnav.style.display = 'flex';
                mobnav.style.animationPlayState = 'running';

                setTimeout(() => {
                    mobnavin.style.display = 'flex';
                }, 1000);

            }
            else {
                mobnav.style.display = 'none';
                mobnavin.style.display = 'none';
                mobnav.style.animationPlayState = 'paused';

            }
        }

        function login() {
            let names = prompt('Enter Your Username');
            let password = prompt('Enter you Password');
            document.getElementById('names').innerHTML = names;

        }

        let value = 4000;
        let i = 1;
        while (i < 220) {
            setTimeout(() => {
                document.getElementById('name').innerHTML = `Welcome ${name} to our FoodMaza`;

                document.getElementById('name').style.color = 'blue';



            }, value);

            value = value + 4000;
            setTimeout(() => {
                document.getElementById('name').innerHTML = `We are serving fresh food`;
                document.getElementById('name').style.color = 'brown'

            }, value);
            value = value + 4000;
            setTimeout(() => {
                document.getElementById('name').innerHTML = `We are delivering the order on time`;
                document.getElementById('name').style.color = 'deeppink'

            }, value);
            value = value + 4000;
            setTimeout(() => {
                document.getElementById('name').innerHTML = `Fast and Secure website`;
                document.getElementById('name').style.color = 'green'

            }, value);
            i++;
            value = value + 4000;
        }