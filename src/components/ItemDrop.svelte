<script>
    export let labelled = "";
    export let text;
    export let name;

    let loading = false;

    const submit = (e) => {
        
        if (!loading) {
            loading = true;
            setTimeout(() => {
                loading = false;
            }, 5000);
        } 
    }
</script>

<div class="dropdown-menu p-2 pl-5 pr-5" aria-labelledby={labelled}>
    
    <h6>{name}</h6>
    <div class="mb-2 text-muted">{text}</div>
    
    <form on:submit|preventDefault={submit} class="input-group input-group-sm  pl-3 pr-3 d-flex justify-content-around">
        <input class="form-control" type="number" value=1 disabled={loading}/>
        <button type="submit" class="btn btn-outline-success btn-sm" >

            { #if loading } 

            <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                <circle fill="#fff" stroke="none" cx="20" cy="40" r="6">
                <animateTransform 
                    attributeName="transform" 
                    dur="1s" 
                    type="translate" 
                    values="0 15 ; 0 -15; 0 15" 
                    repeatCount="indefinite" 
                    begin="0.1"/>
                </circle>
                <circle fill="#fff" stroke="none" cx="50" cy="40" r="6">
                <animateTransform 
                    attributeName="transform" 
                    dur="1s" 
                    type="translate" 
                    values="0 10 ; 0 -10; 0 10" 
                    repeatCount="indefinite" 
                    begin="0.2"/>
                </circle>
                <circle fill="#fff" stroke="none" cx="80" cy="40" r="6">
                <animateTransform 
                    attributeName="transform" 
                    dur="1s" 
                    type="translate" 
                    values="0 5 ; 0 -5; 0 5" 
                    repeatCount="indefinite" 
                    begin="0.3"/>
                </circle>
            </svg>
            
            { :else } Buy { /if }
        </button>
    </form>
</div>

<style>

    .dropdown-menu {
        max-width: 25%;
        font-size: 0.6em;
    }

    .input-group {
        gap: 1.0em;
    }

    svg {
        width: 3vw;
        height: auto;
    }

    form input {
        flex-grow: 3;
    }

    form button {
        flex-grow: 2;
    }

    input:focus {
        border-color: #c5a3c8;
        box-shadow: 0 0 0 0.25rem rgb(156 69 153 / 25%);
    }


    button:focus  {
        background-color: #fff;
        box-shadow: 0 0 0 0.25rem rgb(25 135 84 / 50%);
    }

    button:focus:hover {
        color: #42ae7c;
    }

    button  circle {
        fill: #42ae7c;
    }



</style>