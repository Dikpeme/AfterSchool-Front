<template>
      <div class="box" style="display:table; margin-left:20px; float:left;">
        <h4>Sorting</h4>

        <select class="sort-box">
          <option class="link">
            Ascending
          </option>
          <option class="link">
            Descending
          </option>
        </select>

        <select class="sort-box">
          <option class="link">
            Price
          </option>
          <option class="link">
            Location
          </option>
          <option class="link">
            Availability
          </option>
          <option class="link">
            Subject
          </option>
        </select>
               
      </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.sort-box {
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    padding:5px;
  }

.box select {
  background-color: #0563af;
  color: white;
  padding: 12px;
  width: 250px;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.box::before {
 
  font-family: FontAwesome;
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
  padding: 30px;
}



 </style>
