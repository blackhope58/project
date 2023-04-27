import {
  readFile,
  writeFile,
  appendFile,
  unlink,
  mkdir,
  rmdir,
} from "node:fs/promises";

const contents = await readFile("./password.txt", { encoding: "utf8" });
console.log("Password  : ", contents);

mkdir("newFolder/text", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasör oluşturuldu");
});

writeFile("newFolder/text/message.txt", "Hello Node.js", "utf8");
const writedMessages = await readFile("./message.txt", { encoding: "utf8" });
console.log("Oluşturulan mesaj  :", writedMessages);

appendFile("newFolder/text/message.txt", "\n Yeni satır", "utf8");
const appanedMessages = await readFile("./message.txt", { encoding: "utf8" });
console.log("Oluşturulan mesaj  : \n", appanedMessages);

unlink("message.txt", (err) => {
  if (err) console.log(err);
});

rmdir("newFolder", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasör silindi");
});
