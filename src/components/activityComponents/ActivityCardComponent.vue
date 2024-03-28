<template>
    <div class="col-md-4 mb-3 card-list">
      <div class="card">
        <img src="@/assets/workout.jpg" class="card-img-top" :alt="Activity.title">
        <i class="fa-solid fa-trash delete-icon" @click="deleteActivity"></i>
        <div class="card-body-1">
          <h5 class="card-title">{{ Activity.title }}</h5>
          <router-link :to="`/activities/${Activity.title}/`" class="button product_type_simple" aria-label="En savoir plus sur {{ Activity.title }}" rel="nofollow">Lire la suite </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import activityService from '../../services/activityService';
  export default {
    name: "ActivityCardComponent",
    props: {
      Activity: {
        type: Object,
        required: true
      }
    },
    methods: {

      async deleteActivity() {
      try {
            //Delete
            const res = await activityService.deleteActivity(this.Activity._id);

            // Émettre un événement pour indiquer la suppression de l'activité
            this.$emit('activityDeleted');

            //Ici fait en sorte lle parrent appel sa methode fecthData()
            console.log("Acitivity deleted :",res.message)
          
          } catch (error) {
            alert("Failed to delete activity :"+ error);
            console.error('Failed to delete an activity:', error);
          }
    }
  }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la carte d'activité peuvent être ajoutés ici */
  

    .card-list .button {
        display: none;
    }

    .card-list:hover .button {
        display: inline-block;
    }
    .qodef-product-list-title a,
    .button.product_type_simple {
        text-transform: uppercase;
        text-decoration: none;
        color: inherit; /* Pour conserver la couleur par défaut des liens */
    }
    .card-title{
      text-transform: uppercase;
    }

.delete-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  z-index: 1;
  color: red; /* Couleur de la croix */
}
  </style>
  