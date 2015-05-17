HelloComponent = Polymer({

    is: 'hello-component',

    properties: {

      name: {
        type: String,
        value: 'Obi-Wan Kenobi',
        reflectToAttribute: true
      },

      fancy: {
        type: Boolean,
        type: false
      }

    },

    behaviors: [SampleBehavior],
    
    created: function() {
      console.log('1. LIFECYCLE created: A new jedi has been created');
    },

    ready: function() {
      console.log('2. LIFECYCLE ready: Jedi now has local dom ready and default values');
    },

    factoryImpl: function(name){
      this.name = name
      console.log('*. LIFECYCLE factoryImpl: Custom Jedi :P');
      console.log("I am only invoked when you use me like: new HelloComponent('"+this.name+"')");
      this.sayHello();
    },

    attached: function(author){
      console.log('3. LIFECYCLE attached: Anakin is now in Tatooine');
    },

    detached: function(author){
      console.log('4. LIFECYCLE dettached: Anakin is dead deal with it...');
    },
    
    sayHello: function(greeting) {
      var response = greeting || 'Hello far far away Galaxy, I am';
      console.log(response + " " + this.name);
    },

    fireLasers: function() {
      this.fire('hello-component-lasers-success', { sound: 'Pew pew pew!' });
    }

  });