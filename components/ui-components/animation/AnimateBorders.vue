<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div class="pa-5">
    <v-card height="400" class="mb-5 d-flex align-center" color="black">
      <div class="card-1"></div>
    </v-card>

    <v-card height="400" class="mb-5 d-flex align-center" color="black">
      <div class="card-2"></div>
    </v-card>

    <v-card height="400" class="mb-5 d-flex align-center" color="black">
      <div class="card-3"></div>
    </v-card>

    <v-card height="400" class="mb-5 d-flex align-center" color="black">
      <div class="card-4"></div>
    </v-card>

    <v-card height="400" class="mb-5 d-flex align-center" color="black">
      <div class="card-5"></div>
    </v-card>

    <v-card height="400" class="mb-5 d-flex align-center" color="black">
      <div class="card-6"></div>
    </v-card>

    <v-card height="400" class="mb-5 d-flex align-center" color="black">
      <div class="card-7"></div>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.card-1 {
  margin: 5px auto;
  padding: 2rem;
  width: 300px;
  height: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 102%;
    width: 102%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: conic-gradient(
      #ff4545,
      #00ff99,
      #006aff,
      #ff0095,
      #ff4545
    );
    border-radius: 10px;
    padding: 3px;
    z-index: -1;
  }
  &::before {
    filter: blur(1.5rem);
    opacity: 0.7;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}

.card-2 {
  margin: 5px auto;
  padding: 2rem;
  width: 300px;
  height: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 102%;
    width: 102%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: conic-gradient(
      from var(--angle),
      #ff4545,
      #00ff99,
      #006aff,
      #ff0095,
      #ff4545
    );
    border-radius: 10px;
    padding: 3px;
    z-index: -1;
    animation: 3s linear infinite spin;
  }
  &::before {
    filter: blur(1.5rem);
    opacity: 0.7;
  }
}

.card-3 {
  margin: 5px auto;
  padding: 2rem;
  width: 300px;
  height: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 102%;
    width: 102%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: conic-gradient(
      from var(--angle),
      transparent 70%,
      #006aff
    );
    border-radius: 10px;
    padding: 3px;
    z-index: -1;
    animation: 3s linear infinite spin;
  }
  &::before {
    filter: blur(1.5rem);
    opacity: 0.7;
  }
}

.card-4 {
  margin: 5px auto;
  padding: 2rem;
  width: 300px;
  height: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 103%;
    width: 103%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: conic-gradient(
        from var(--angle),
        transparent 70%,
        #fc8605
      ),
      conic-gradient(from calc(var(--angle) + 180deg), transparent 70%, #fc8605);
    border-radius: 10px;
    padding: 3px;
    z-index: -1;
    animation: 3s linear infinite spin;
  }
  &::before {
    filter: blur(1.5rem);
    opacity: 0.7;
  }
}

.card-5 {
  margin: 5px auto;
  padding: 2rem;
  width: 300px;
  height: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 103%;
    width: 103%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: conic-gradient(
      from var(--angle),
      transparent 5%,
      #0700e3,
      #6c02f2,
      #ed03dc,
      #7c096d
    );
    border-radius: 10px;
    padding: 3px;
    z-index: -1;
    animation: 3s linear infinite spin;
  }
  &::before {
    filter: blur(1.5rem);
    opacity: 0.7;
  }
}

.card-6 {
  margin: 5px auto;
  padding: 2rem;
  width: 300px;
  height: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 103%;
    width: 103%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: conic-gradient(
      from var(--angle),
      #fff2ff,
      #eb99f2,
      #defcfe,
      #91fff3,
      #fff4ff
    );
    border-radius: 10px;
    padding: 3px;
    z-index: -1;
    animation: 3s linear infinite spin;
  }
  &::before {
    filter: blur(2rem);
    opacity: 0.7;
  }
}

.card-7 {
  margin: 5px auto;
  padding: 2rem;
  width: 300px;
  height: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 110%;
    width: 110%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: conic-gradient(
      from var(--angle),
      #ffc006,
      #fe0100,
      #ffc006
    );
    border-radius: 10px;
    padding: 3px;
    z-index: -1;
    animation: 3s linear infinite spin;
  }
  &::before {
    filter: blur(2rem);
    opacity: 0.7;
  }
}
</style>
