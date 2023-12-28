import {glob} from "glob";
import matter from "gray-matter";
import fs from "fs";
import showdown from "showdown";

export async function readFilesInDirectory(path) {
  /**
   * Пример path - content/products/
   * */

  //Получаем пути до каждого md файла
  const mdfiles = await glob(`${path}*.md`);

  //Получаем данные из md файлов
  return mdfiles.map((el) => {
    const main_data = fs.readFileSync(el, "utf-8");
    const {data: mainData, content: main} = matter(main_data);
    const fullData = {
      ...mainData,
      slug: el.split('/').pop().split('.').shift()
    }

    /** конвертирование md синтаксиса в html */
    let converter = new showdown.Converter()
    let html = converter.makeHtml(main)

    return {
      mainData: fullData,
      html
    };
  });
}