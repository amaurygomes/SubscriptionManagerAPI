export const SUCCESS_MESSAGES = {
    planCreated: (planName: string) => `Plan ${planName} has been successfully created.`,
    planUpdated: (planName: string) => `Plan ${planName} has been successfully updated.`,
    planDeleted: (planName: string) => `Plan ${planName} has been successfully deleted.`,
    planActivated: (planName: string) => `Plan ${planName} has been successfully activated.`,
    planDeactivated: (planName: string) => `Plan ${planName} has been successfully deactivated.`,
};

export const ERROR_MESSAGES = {
    planAlreadyExists: (planName: string) => `Plan with name ${planName} already exists.`,
    planNotFound: "No plan was found with the given criteria.",
    invalidPlanDetails: "The details provided for the plan are invalid.",
    serverError: "An unexpected error occurred, please try again later.",

};