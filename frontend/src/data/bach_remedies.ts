import bachRemedies from "@/data/bach_remedies.json";

interface BachRemedy {
  id: number;
  name: {
    latvian: string;
    english: string;
    norwegian: string;
  };
  short_description: {
    latvian: string;
    english: string;
    norwegian: string;
  };
  group: string;
  picture: string;
  Bach_description: {
    latvian: string;
    english: string;
    norwegian: string;
  };
  Bernard_description: {
    latvian: string;
    english: string;
    norwegian: string;
  };
  //   negative_state: {
  //     latvian: string[];
  //     english: string[];
  //     norwegian: string[];
  //   };
  //   positive_state: {
  //     latvian: string[];
  //     english: string[];
  //     norwegian: string[];
  //   };
  similar_remedies: {
    latvian: string;
    english: string;
    norwegian: string;
  };
  similar_remedy_ids: {
    latvian: string;
    english: string;
    norwegian: string;
  };
  alternative_latvian_name: string;
  //   indicative_statements: {
  //     latvian: string[];
  //     english: string[];
  //     norwegian: string[];
  //   };
  indicative_states: {
    latvian: string;
    english: string;
    norwegian: string;
  };
  effect: {
    latvian: string;
    english: string;
    norwegian: string;
  };
}

const remediesByGroup = bachRemedies.reduce(
  (acc: Record<string, BachRemedy[]>, remedy) => {
    const groupId = remedy.group;
    if (!acc[groupId]) {
      acc[groupId] = [];
    }
    acc[groupId].push(remedy);
    return acc;
  },
  {}
);

export default remediesByGroup;
