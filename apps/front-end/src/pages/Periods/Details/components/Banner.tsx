export function Banner() {
  return (
    <>
      <div id="baner" style={{
        "backgroundSize": "100%",
        "backgroundImage": `url(${'https://images.sympla.com.br/66d7a0ac0a850-lg.png'})`,
        backgroundPosition: "50% 50%",
        borderBottomWidth: "3px"
      }}
        className="w-full h-[74vh] flex justify-center border-b-[#ffffff]">
      </div>
    </>
  )
}