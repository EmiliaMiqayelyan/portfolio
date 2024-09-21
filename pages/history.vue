<template>
  <div class="w-full flex justify-content-center gap-3 pt-3">
    <info-bar/>

    <div class="main-discover-section p-4 pt-5 relative">
      <lazy-header/>
      <div>
        <div>
          <h3 class="mt-0">Education</h3>

          <Timeline :value="education" align="right" class="w-9">
            <template #content="slotProps">
              <div class="timeline-section p-4">
                <div class="flex align-items-center justify-content-between">
                  <div>
                    <p class="m-0 university">{{ slotProps.item.university }}</p>
                    <p class="degree m-0 mt-1 opacity-50 font-italic">{{ slotProps.item.degree }}</p>
                  </div>
                  <div class="date-section w-max h-max p-1 px-3 border-round-xl">
                    <p class="date m-0 opacity-50">{{ slotProps.item.date }}</p>
                  </div>
                </div>

                <div>
                  <p class="study opacity-50">{{ slotProps.item.study }}</p>
                </div>

                <div>
                  <p class="diploma cursor-pointer mb-0">{{ slotProps.item.diploma }}</p>
                </div>
              </div>
            </template>
          </Timeline>
        </div>

        <div>
          <h3 class="mt-0">Work History</h3>

          <Timeline :value="work" align="right" class="w-9">
            <template #content="slotProps">
              <div class="timeline-section p-4">
                <div class="flex align-items-center justify-content-between">
                  <div>
                    <p class="m-0 university">{{ slotProps.item.company }}</p>
                    <p class="degree m-0 mt-1 opacity-50 font-italic">{{ slotProps.item.position }}</p>
                  </div>
                  <div class="date-section w-max h-max p-1 px-3 border-round-xl">
                    <p class="date m-0 opacity-50">{{ slotProps.item.date }}</p>
                  </div>
                </div>

                <div>
                  <p class="study opacity-50 mb-0">{{ slotProps.item.study }}</p>
                </div>
              </div>
            </template>
          </Timeline>
        </div>
      </div>
      <lazy-footer/>
    </div>
  </div>
</template>

<script setup>
const education = ref([
  {
    university: 'IT Space Academy',
    date: 'mar 2021 - jan 2022',
    degree: 'Student',
    study: 'JavaScript, React.js',
    diploma: 'CERTIFICATE >'
  },
  {
    university: 'National Polytechnic University of Armenia',
    date: 'sep 2020 - sep 2024',
    degree: 'Student',
    study: 'Information Technology',
    diploma: 'DIPLOMA >'
  },
  {
    university: 'European University of Armenia',
    date: 'sep 2024 - present',
    degree: 'Student',
    study: 'Information Technology'
  },
  {
    university: '',
    date: '',
    degree: '',
    study: ''
  }
]);

const work = ref([
  {
    company: 'Iguan Systems',
    date: 'jan 2023 - present',
    position: 'Front End Developer',
    study: 'Create and optimize websites',
  },
  {
    company: '',
    date: '',
    position: '',
    study: '',
  }
]);
</script>

<style scoped>
.main-discover-section {
  background-color: #1E1E28;
  color: white;
  width: 59rem;
}

.timeline-section {
  background-color: #2B2B36;
  margin-bottom: 20px;
  text-align: left;
  font-family: "Poppins", sans-serif;
}

.university {
  font-size: 15px;
  font-weight: 500;
}

.degree {
  font-size: 12px;
}

.date, .study {
  font-size: 13px;
}

.date-section {
  background-color: #1F1F29;
}

.diploma {
  font-size: 13px;
  letter-spacing: 3px;
  color: #FFC107;
  font-weight: 500;
}

:deep(.p-timeline-event:last-child) {
  display: none;
}

:deep(.p-timeline .p-timeline-event-marker::before) {
  background-color: #1E1E28;
}

:deep(.p-timeline .p-timeline-event-marker) {
  border: 3px solid #FFC107;
  background-color: #1E1E28;
}

:deep(.p-timeline .p-timeline-event-connector) {
  background-color: #191923;
}

:deep(.p-timeline-right .p-timeline-event-opposite) {
  display: none;
}
</style>