import { from } from 'rxjs';

export class CompilerService {
  private compiler: any = new (window as any).MINDAR.IMAGE.Compiler(false);
  constructor() {}

  compile(img: HTMLImageElement, callback: (d: any) => void) {
    return from(this.compiler.compileImageTargets([img], callback));
  }

  export() {
    return this.compiler.exportData();
  }
}
