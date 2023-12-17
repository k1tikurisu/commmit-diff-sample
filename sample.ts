type SampleType = {
  id: number;
  name: string;
}

const Sample = ({ id, name }: SampleType) => {
  console.log(id, name);
}
