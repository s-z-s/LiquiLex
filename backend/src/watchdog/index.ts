import { Task, Event } from '@liquidmetal-ai/raindrop-framework';
import { Env } from './raindrop.gen';

export default class extends Task<Env> {
  async handle(event: Event): Promise<void> {
    try {
      // Basic event validation - Event interface has specific fields
      if (!event || typeof event !== 'object') {
        this.env.logger.warn('Invalid event received', { eventType: 'invalid' });
        return;
      }

      // Extract event type safely - Event only has 'scheduled' type
      const eventType = event.type || 'scheduled';
      const eventData = event; // Event object contains cron, type, scheduledTime
      
      this.env.logger.info('Task executed', { 
        eventType,
        scheduledTime: event.scheduledTime
      });

      // Handle different event types (currently only 'scheduled' exists)
      if (eventType === 'scheduled') {
        await this.handleScheduledTask(eventData);
      } else {
        // For future event types
        this.env.logger.warn('Unknown event type', { eventType });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      this.env.logger.error('Task execution failed', { 
        error: errorMessage,
        eventType: event?.type || 'unknown'
      });
      
      // Don't throw - tasks should handle errors gracefully
      return;
    }
  }

  private async handleScheduledTask(data: any): Promise<void> {
    this.env.logger.info('Processing scheduled task', { cron: data.cron });
    
    // Note: waitUntil background operations
    // This depends on execution context - commented out for now
    // if ('waitUntil' in this.env) {
    //   this.env.waitUntil(Promise.resolve('Background operation'));
    // }
  }

  private async handleManualTask(data: any): Promise<void> {
    this.env.logger.info('Processing manual task', { data });
  }

  // === Integration Examples ===

  // Example: Call an actor (if you have actors in manifest)
  private async callActor(actorName: string, methodName: string, data: any): Promise<any> {
    return { error: 'Actor integration not implemented in this template' };
  }

  // Example: Use storage - update bucket binding name to match your manifest
  private async saveResult(key: string, data: any): Promise<void> {
    try {
      // Example: Use FILES binding (if you have bucket "files" in manifest)
      // const bucket = this.env.FILES;
      // Replace with your actual bucket binding name from raindrop.gen.ts
      throw new Error('Bucket binding not configured - update this method to use your bucket binding');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      this.env.logger.error('Failed to save result', { error: errorMessage, key });
      throw error;
    }
  }
}