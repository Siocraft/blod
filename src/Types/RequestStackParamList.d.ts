type RequestStackParamList = {
  Home: {
    setTabsTintColor: (color: string) => void;
  };
  OtherProfile: { userId: string };
  RequestDetails: { requestId: string };
  CreateDonationRequest: Record<string, never>;
};
