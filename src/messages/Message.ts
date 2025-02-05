export const SUCCESS_MESSAGES = {
    planCreated: (planName: string) => `Plan ${planName} has been successfully created.`,
    planUpdated: (planName: string) => `Plan ${planName} has been successfully updated.`,
    planDeleted: (planName: string) => `Plan ${planName} has been successfully deleted.`,
    planActivated: (planName: string) => `Plan ${planName} has been successfully activated.`,
    planDeactivated: (planName: string) => `Plan ${planName} has been successfully deactivated.`,

    subscriptionCreated: (customerEmail: string) => `Subscription for ${customerEmail} has been successfully created.`,
    subscriptionUpdated: (subscriptionId: string) => `Subscription ${subscriptionId} has been successfully updated.`,
    subscriptionCanceled: (subscriptionId: string) => `Subscription ${subscriptionId} has been successfully canceled.`,
    subscriptionActivated: (subscriptionId: string) => `Subscription ${subscriptionId} has been successfully activated.`,
    subscriptionSuspended: (subscriptionId: string) => `Subscription ${subscriptionId} has been successfully suspended.`,
};

export const ERROR_MESSAGES = {
    planAlreadyExists: (planName: string) => `Plan with name ${planName} already exists.`,
    planNotFound: "No plan was found with the given criteria.",
    invalidPlanDetails: "The details provided for the plan are invalid.",
    serverError: "An unexpected error occurred, please try again later.",

    subscriptionNotFound: "No subscription was found with the given criteria.",
    invalidSubscriptionDetails: "The details provided for the subscription are invalid.",
    subscriptionAlreadyExists: (customerEmail: string) => `A subscription already exists for ${customerEmail}.`,
    subscriptionStatusInvalid: (status: string) => `The subscription status '${status}' is invalid.`,
};
