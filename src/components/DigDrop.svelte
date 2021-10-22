<script>
    import Fertilizer from "../assets/fertilizer.svg";
    import Shovel from "../assets/shovel.svg";
    import Clover from "../assets/clover.svg";
</script>


<div id="context-drop" class="dropdown-menu" >
    <ul class="p-1">
        <li>Open</li>
        <ul>
            <ul class="d-flex row p-2">
                <li class="col"><Fertilizer/></li>
                <li class="col"><Shovel/></li>
                <li class="col"><Clover/></li>
            </ul>
        </ul>
    </ul>
</div>




<style>
    .dropdown-menu {
        max-width: 5em;
    }
    
    ul {
        list-style-type: none;
        padding-inline-start: 0;
        margin-bottom: 0;
    }

    .dropdown-item:active,.dropdown-item:hover,.dropdown-item:focus {
        color: #9c4ba1;
        background-color: #fff;
    }

    li  {
        transition: scale(0.4);
    }

</style>