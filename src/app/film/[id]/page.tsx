import Button from "@/app/components/button";

export default function FilmPage({ params }: { params: { id: string } }) {
  console.log("huyams", params);

  return <Button>{JSON.stringify(params)}</Button>;
}
