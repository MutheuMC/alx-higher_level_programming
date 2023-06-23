SQLAlchemy object-relational configuration involves the combination of Table, mapper(), and class objects to define a mapped class. declarative allows all three to be expressed at once within the class declaration. As much as possible, regular SQLAlchemy schema and ORM constructs are used directly, so that configuration between “classical” ORM usage and declarative remain highly similar.