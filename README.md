Takes this

    <ul id="a">
        <li><a href="">Link1</a></li>
        <li><a href="">Link2</a></li>
        <li class="active"><a href="">Link3</a></li>
        <li><a href="">Link4</a></li>
    </ul>

and turns it into something similar to a dropdown menu (which submits onchange)

    $('#a').dropdownify();
