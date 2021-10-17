<script>
    import { Container } from 'sveltestrap';

    let items = [
        {   
            description: "Breaks things",
            name: "Hammer"
        }, {
            description: "Gives lick",
            name: "Luck"
        }, {
            description: "Hui znaet che delaet",
            name: "Rarick"
        }
    ]
</script>


<Container fluid>
    <div class="scrollable-row d-flex justify-content-center">
        { #each items as item }
            <div class="item text-center">
                <div class="d-flex align-center flex-column">
                    <div class="item-body rounded-circle">
                        { item.description }
                    </div>
                    <div class="">
                        { item.name }
                    </div>
                </div>
            </div>
        { /each }
    </div>
</Container>

<style>
    .scrollable-row {
        overflow: auto;
        white-space: nowrap;
    }
    .item {
        display: inline-block;
        float: none;
        width: 100px;
        margin: 10px 10px;
    }

    .item-body {
        border: 1px solid red;
        overflow: hidden;
        width: 50px;
        height: 50px;

    }

    .flex-column {
        align-items: center;
    }

</style>
