type RequestStackParamList = {
  Home: {
    setTabsTintColor: (color: string) => void;
  };
  OtherProfile: { userId: string };
  CreateDonationRequest: Record<string, never>;
};
