export abstract class UptoMemberRepository {
  abstract create(name: string, memberFunction: string): Promise<void>

  abstract list(): Promise<object>
}