<template>
    <div class="container-fluid" v-if="Activity != null">
        <div class="row">
            <!-- Image -->
            <div class="col-md-6">
                <img src="@/assets/workout.jpg" alt="Workout" class="img-fluid">
                <button class="btn btn-primary" @click="addToMyActivities(Activity.title)"> Add to my activities</button>
            </div>
            <!-- Image -->

            <!-- Infos-->
            <div class="col-md-6 list-unstyled" >
                <div class="activity-list">
                    <p>Category: <router-link :to="'/activities/category/'+Activity.category"> {{Activity.category}}</router-link></p>
                    <h3 class="title">{{ Activity.title }}</h3>

                    <div style="margin-top: 40px;">
                        <img style="margin: -6px;" src="https://www.california-gym.com/tn/wp-content/uploads/2019/09/time.png" width="25px;">
                        <strong style="margin-right: 15px; margin-left: 25px;">Duration of the course:</strong> 
                        {{ Activity.duration }} mins
                    </div>
                    <div style="margin-top: 10px;">
                        <img style="margin: -6px;" src="https://www.california-gym.com/tn/wp-content/uploads/2019/09/sport.png" width="25px;">
                        <strong style="margin-right: 15px; margin-left: 25px;">Equipment used:</strong>
                        {{ Activity.material }}
                    </div>
                    <div style="margin-top: 10px;">
                        <img style="margin: -6px;" src="https://www.california-gym.com/tn/wp-content/uploads/2020/03/intesnsité3.png" width="25px;">
                        <strong style="margin-right: 15px; margin-left: 25px;">Intensity:</strong>
                        {{ Activity.intensity }}
                    </div>
                    <div style="margin-top: 10px;">
                        <img style="margin: -6px; margin-left: -7px;" src="https://www.california-gym.com/tn/wp-content/uploads/2019/09/muscle.png" width="30px;">
                        <strong style="margin-right: 15px; margin-left: 21px;">Muscle groups targeted:</strong>
                        {{Activity.muscleTarget }} 
                    </div>
                    <div style="margin-top: 10px;">
                        <img style="margin: -6px; margin-left: -1px;" src="https://www.california-gym.com/tn/wp-content/uploads/2019/09/tenue.png" width="22px;">
                        <strong style="margin-right: 10px; margin-left: 25px;">Recommended attire:</strong> 
                        {{Activity.sportswear }}
                    </div>
                    <div style="margin-top: 10px;">
                        <img style="margin: -6px; margin-left: -3px;" src="https://www.california-gym.com/tn/wp-content/uploads/2019/09/recommendation.png" width="30px;">
                        <strong style="margin-right: 15px; margin-left: 22px;">Recommendations:</strong> 
                        {{ Activity.recommandations }}
                    </div>

                </div>
            </div>
            <!-- Infos-->

        </div>
    </div>
</template>


<script>
export default {
    name:"ActivityDetailsComponent",
    props: {
      Activity: {
        type: Object,
        required: true
      }
    },
    
    methods:{
        addToMyActivities( title){
            alert("added to my activity : " + title);
        }
    }

}
</script>

<style scoped>
    .list-unstyled{
      text-align: left;
    }

    .attribute {
        font-weight: bold;
        color: black;
    }

    .title{
        color:#56a7d5;
        margin-top:0px ;
    }
    .row{
        margin-bottom: 20px;
        margin-top: 50px;
    }
    .activity-list{
        padding-left: 20px;
    }
    .img-fluid{
        padding: 25px 30px 20px 50px;
    }
</style>