export type EventType = {
  classifications: Array<{
    family: boolean;
    genre: {
      id: string;
      name: string;
    };
    primary: boolean;
    segment: {
      id: string;
      name: string;
    };
    subGenre: {
      id: string;
      name: string;
    };
  }>;
  dates: {
    spanMultipleDays: boolean;
    start: {
      dateTBA: boolean;
      dateTBD: boolean;
      localDate: string;
      noSpecificTime: boolean;
      timeTBA: boolean;
    };
    status: {
      code: string;
    };
    timezone: string;
  };
  id: string;
  images: Array<{
    fallback: boolean;
    height: number;
    width: number;
    ratio: string;
    url: string;
  }>;
  locale: string;
  name: string;
  priceRange: {
    type: string;
    currency: string;
    max: number;
    min: number;
  };
  promoter: {
    id: string;
    name: string;
  };
  promoters: Array<{
    id: string;
    name: string;
  }>;
  sales: {
    public: {
      startDateTime: string;
      endDateTime: string;
      startTBA: boolean;
      startTBD: boolean;
    };
  };
  seatmap: {
    staticUrl: string;
  };
  test: boolean;
  type: string;
  url: string;
};
