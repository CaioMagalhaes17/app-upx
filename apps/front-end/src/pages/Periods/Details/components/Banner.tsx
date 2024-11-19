export function Banner({ bannerImg }: { bannerImg: string }) {
  return (
    <>
      <div id="baner" style={{
        "backgroundSize": "100%",
        "backgroundImage": `url(${bannerImg})`,
        backgroundPosition: "50% 50%",
        borderBottomWidth: "3px"
      }}
        className="w-full h-[74vh] flex justify-center border-b-[#ffffff]">
      </div>
    </>
  )
}