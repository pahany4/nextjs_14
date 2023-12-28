import {Header} from "@components/header/header";
import {getContent} from "@/utils/getContent";

export const HeaderServer = async () => {

  const {data} = await getContent({path_file: "/content/header/index.md"});

  return (
    <Header nav={data.nav}/>
  )
}