export interface Content {
  title: String;
  bodyText?: String[];
  bodyArr?: {
    technologies: subContent[];
    languages: subContent[];
  };
  type: String;
}

interface subContent{
  name: String;
  howMuch: Number;
}
