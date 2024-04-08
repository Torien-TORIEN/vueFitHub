<template>
<div class="planning">
<div class="jumbotron jumbotron-fluid bg-light text-dark position-relative" >
      <div class="container-fluid">
        <div class="row align-items-center" style="background-color:white"> <!-- Utilisation de align-items-center pour centrer verticalement -->
          <div class="col-sm-6" >
            <h1 class="text-center">Planning</h1> <!-- Ajout de la classe text-center pour centrer horizontalement -->
            <h5 class="text-center"><router-link to="/"> Home</router-link> > Planning</h5> <!-- Ajout de la classe text-center pour centrer horizontalement -->
             
          </div>
          <div class="col-sm-6 position-relative">
            <!-- Insérer ici votre image de fond -->
            <img src="@/assets/coach.jpg" alt="Workout" class="img-fluid">
            <div class="blur-gradient"></div> <!-- Overlay gradient pour l'effet de flou progressif -->
          </div>
        </div>
      </div>
    </div>


    <div class="container mt-4">
      <div class="row align-items-center justify-content-center"> <!-- Utilisation de justify-content-center pour centrer horizontalement -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="coachSelect" class="form-label"><strong>Choisir un coach :</strong></label>
            <select class="form-select" id="coachSelect" v-model="selectedCoach" @change="handleSelectionChange">
              <option selected disabled>Sélectionner un coach</option>
              <!-- Ajoutez ici vos options pour les coachs -->
              <option>Siwar</option>
              <option>Torien</option>
              <option>Nour</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="activitySelect" class="form-label"><strong>Choisir une activité :</strong></label>
            <select class="form-select" id="activitySelect" v-model="selectedActivity" @change="handleSelectionChange">
              <option selected disabled>Sélectionner une activité</option>
              <!-- Ajoutez ici vos options pour les activités -->
              <option>Activité 1</option>
              <option>Activité 2</option>
              <option>Activité 3</option>
            </select>
          </div>
        </div>
        <p v-if="!selectedCoach && !selectedActivity"><strong>Pour afficher le planning, veuillez sélectionner un coach et/ou une activité.</strong></p>
      </div>
      <div class="col-md-4 text-center">
          <img src="@/assets/agenda.png" alt="Agenda" class="img-fluid agenda-image">
          
        </div>
    </div>

    <div v-if="selectedCoach || selectedActivity">
      <div id="schedule" style="margin-top: 40px;">
        <ejs-schedule v-if="selectedCoach || selectedActivity" height="550px" currentView="Month" :eventSettings="appointmentData"></ejs-schedule>
      </div>
    </div>
</div>   
</template>

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";

export default {
  name:"PlanningComponent",
  components: {
    'ejs-schedule': ScheduleComponent
  },
  provide : {
    schedule : [Day, Week, WorkWeek, Month, Agenda]
  },
  data() {
  return {
    selectedCoach: null,
    selectedActivity: null,
    appointmentData: {
      dataSource: [
       
        {
          Subject: 'Boxing',
          StartTime: new Date(2024, 3, 3, 9, 0),
          EndTime: new Date(2024, 3, 3, 10, 0)
        },
        {
          Subject: 'Musculation',
          StartTime: new Date(2024, 3, 10, 10, 30),
          EndTime: new Date(2024, 3, 10, 11, 0)
        },
        {
          Subject: 'Meditation',
          StartTime: new Date(2024, 3, 10, 10, 30),
          EndTime: new Date(2024, 3, 10, 11, 0)
        }
      ]
    },
    showSchedule: false // Variable de données pour contrôler l'affichage du composant d'agenda
  };
},
methods: {
    handleSelectionChange() {
      // Vérifier si une option est sélectionnée dans l'une des listes déroulantes
      if (this.selectedCoach || this.selectedActivity) {
        // Si oui, afficher le composant d'agenda
        this.showSchedule = true;
      } else {
        // Sinon, masquer le composant d'agenda
        this.showSchedule = false;
      }
    }
  }
};
</script>

<style scoped>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

.blur-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%; /* Pleine largeur */
      height: 100%;
      background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 1) 100%); /* Gradient transparent à flou opaque de gauche à droite */
      pointer-events: none; /* Permet aux éléments de cliquer à travers */
  }
.planning{
  background-color: rgb(243, 240, 240);
}

.agenda-image {
  /* Définir la taille de l'image */
  width: 100px; /* Changer la taille selon vos besoins */
  height: auto; /* Pour maintenir le rapport d'aspect */
  /* Centrer l'image verticalement */
  margin-top: 20px; /* Ajuster selon votre mise en page */
  margin-bottom: 20px; /* Ajuster selon votre mise en page */
  margin-left: 580px;
}
</style>