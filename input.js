// erstellt ein inputfeld, wo ihr den Input bei einem P Tag ausgibt
// erstellt ein Add und Reset Button
// der Add Button soll den Inhalt zu "Ich wurde geaddet wechseln"
// der Reset Button, der soll den Inhalt leeren

const userName = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
      count: 0,
      lastName: "",
      //fullname: "",
      // hexe: " Hallo ich bin eine Hexe"
    };
  },
  watch: {
    count(value) {
      if (value > 10) {
        const fakeThis = this;
        setTimeout(function () {
          fakeThis.count = 0;
          //  console.log(this.count)
          //  console.log(fakeThis.count)
        }, 3000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value == "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("fullname wurde aufgerufen");
      if (this.name == "" || this.lastName == "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    outputFullname() {
      console.log("outputFullname() wurde aufgerufen");
      if (this.name == "") {
        return "";
      }
      return this.name + " " + "Schmidt";
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      // event.preventDefault(); reiner JS Code
      alert("Submitted");
    },
    confirmedInput() {
      //console.log("Wieder aufgerufen setName()...");
      this.confirmedName = this.name;
    },
    resetInput() {
      // alert("Der Inhalt wurde resetted")
      this.name = "";
      this.count = 0;
    },
  },
});

userName.mount("#userInput");

// watch
// wenn der Vorname == "Thomas" ist -> input soll geleert werden