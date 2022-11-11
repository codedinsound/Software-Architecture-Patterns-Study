/**
 * JNDI -> Java Naming and Directory Interface
 * 	Allows Java software clients to discover and look up data and objects via a name
 *
 * 		It is an API: independent of any implementation
 * 			~ it is implemented with service locator pattern usually
 *
 * 			For example: we can lookup data source when using application server !!!
 *
 */

/**
	*	It is a design pattern --> it is for obtaining the processes involved in 
	*		obtaining a service with a strong abstraction layer
	*
	*			We have a central registry  "service locator"
	*
	*		ADVANTAGES
	*			- it is like a run-time linker: allows code to be added at run-time without re-compiling
	*				the source code
	*			- can make some optimization
					For example: the application can detect it has a better database library
	*					than the default one -> alter the registry accordingly
	*
	*		DISADVANTAGES
	*
	*			- black box: harder to detect and recover form errors
	*			- registry hides the dependencies --> causes run-time errors instead of
	*				compile-time ones and we do not like it
				- difficult to maintain the registry: dependency injection is more convenient
				
				
			SERVICE LOCATOR VS DEPENDENCY INJECTION 
				Both are the just implementations of the dependency inversion principle !!!
						~ so depend upon abstraction rather than on implementation --> loosely couple
				
				- with service locator the application class asks for it explicitly
						by a message to the locator
				- With injection there is no explicit request, the service appears
					in the application class – hence the inversion of control
				- easier to test applications with dependency injection
				- THE CHOICE IS NOT SO IMPORTANT: THE PRINCIPLE IS IMPORTANT -> WE SHOULD SEPARATE
					SERVICE CONFIGURATION FROM THE USE OF SERVICES WITHIN AN APPLICATION 
	*
	*/
// ======================================================================================================================
interface Service {
  getName(): string;
  execute(): void;
}

class DatabaseService implements Service {
  getName(): string {
    return DatabaseService.name;
  }

  execute(): void {
    console.log('Executing database service');
  }
}

class MessegingService implements Service {
  getName(): string {
    return MessegingService.name;
  }
  execute(): void {
    console.log('Executing messeging service');
  }
}

class ACache {
  private listOfServices: Service[];

  constructor() {
    this.listOfServices = [];
  }

  public getService(jndiName: string): Service {
    for (let i = 0; i < this.listOfServices.length; i++) {
      if (this.listOfServices[i].getName() === jndiName)
        return this.listOfServices[i];
    }

    return null;
  }

  public addService(service: Service): void {
    this.listOfServices.push(service);
  }
}

class InitialContext {
  public lookup(jndiName: string) {
    console.log(DatabaseService.name, jndiName);
    switch (jndiName) {
      case DatabaseService.name:
        return new DatabaseService();
      case MessegingService.name:
        return new MessegingService();
      default:
        return null;
    }
  }
}

class ServiceLocator {
  private static cache: ACache = new ACache();

  public static getService(jdniName: string): Service {
    const service = this.cache.getService(jdniName);

    if (service != null) return service;

    const context: InitialContext = new InitialContext();
    const s: Service = context.lookup(jdniName);

    console.log('post service: ', s);
    this.cache.addService(s);

    return s;
  }
}
abstract class Test {
  static test(): void {}
}

class TestServiceLocator extends Test {
  static test(): void {
    console.log('Testing Service Locator');
    const s: Service = ServiceLocator.getService('DatabaseService');
    s.execute();
  }
}

export { TestServiceLocator };
