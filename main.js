//kita harus tangkap dulu
//elemenet mana yang mau kita
//INJECT

let navbar = document.getElementById("navbar");

//Proses Inject STring to Element
navbar.innerHTML += `

    <h3 class="brand">Jvalley</h3>

    <ul class="menu">

        <li class="menu_item">
            <a href="/">Home</a>
        </li>

        <li class="menu_item">
            <a href="about.html">About</a>
        </li>

        <li class="menu_item">
             <a href="contact.html">Contact</a>
        </li>

        <li class="menu_item">
             <a href="gallery.html">Gallery</a>
        </li>

    </ul>

`;
