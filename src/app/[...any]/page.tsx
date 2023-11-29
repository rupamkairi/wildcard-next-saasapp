type Props = {
  params: {
    any: string[];
  };
};

export default async function AboutPage({ params }: Props) {
  return <h2>Route /{params.any.join("/")}</h2>;
}
