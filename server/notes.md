The error you have (Duplicate entry 'lodddrem@ipsum.com' for key 'email') is given by a database. Database returns you only ONE (first) error, it does not return you what you want.

Solution is not to use database errors, but use validation library instead (like TODO:class-validator), create a separate validation logic and provide a good messages.

- Minlength aanzetten bij password.
- Get all events dingen verwijderen.

export default connect(mapStateToProps, {getEvent, deleteEvent})(withStyles(styles)(EventDetails));