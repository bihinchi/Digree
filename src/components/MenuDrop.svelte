<script>
      import { Link } from "svelte-routing";

</script>

<div class="dropdown-menu" aria-labelledby="account-dropdown">
    <ul class="">
        <li><Link class="dropdown-item" to="browsing">My collection</Link></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
    </ul>
</div>

<style>
    ul {
        list-style-type: none;
        padding-inline-start: 0;
        margin-bottom: 0;
    }

    .dropdown-item:active,.dropdown-item:hover,.dropdown-item:focus {
        color: #9c4ba1;
        background-color: #fff;
    }

</style>