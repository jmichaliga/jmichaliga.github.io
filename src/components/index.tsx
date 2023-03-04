export const Box = ({ children }: any) => <div>{children}</div>

export const Flex = ({ children }: any) => <div className="flex">{children}</div>

export const Bar = () => <div className="w-full h-2 bg-jmRed" />

export const Container = ({ children }: any) => <div className="container mx-auto">{children}</div>

export const Main = ({ children }: any) => <main className="flex flex-col min-h-screen justify-center items-center overflow-hidden">{children}</main>

export const Center = ({ children }: any) => (
  <div className="flex justify-center">{children}</div>
)

export const H1 = ({ children }: any) => <h1 className="text-3xl font-bold">{children}</h1>

export const H2 = ({ children }: any) => <h2 className="text-2xl">{children}</h2>

export const H3 = ({ children }: any) => <h3 className="text-xl">{children}</h3>

export const Header = ({ children }: any) => <h5 className="text-lg">{children}</h5>

export const Footer = ({ children }: any) => <footer className="fixed bottom-2 right-2 bg-jmRed hover:bg-jmBlue bg-clip-text text-transparent text-right">{children}</footer>

export const Ul = ({ children }: any) => <ul className="">{children}</ul>

export const Li = ({ children }: any) => <li className="leading-3">{children}</li>

export const Link = ({ children }: any) => <a className="text-jmBlue">{children}</a>

export const Social = ({ children }: any) => <div className="flex">{children}</div>

export const HoverBulge = ({ children }: any) => <div className="bg-jmRed rounded">{children}</div>

export const Stack = ({ children }: any) => <div className="flex flex-col">{children}</div>
