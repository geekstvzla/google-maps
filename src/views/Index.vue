<template>
    <div id="map"></div> 
</template>

<script>

import { defineComponent, onMounted } from 'vue'
import { Loader } from "@googlemaps/js-api-loader"

export default defineComponent({

    setup() {

        onMounted(() => {

            initMap()

        })

        const initMap = async () => {
     
            const loader = new Loader({
                apiKey: import.meta.env.VITE_GOOGLE_MAP_KEY
            })

            const { Map } = await loader.importLibrary("maps")
            const latLng = { lat: -34.397, lng: 150.644 }
            new Map(document.getElementById("map"), {
                center: latLng,
                zoom: 17
            })
            
        }

    }

})

</script>

<style>

#map {
    height: 300px;
    width: 100%;
}

</style>