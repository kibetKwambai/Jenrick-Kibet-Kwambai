import React from 'react';
import { 
  Plane, 
  ShieldCheck, 
  Cpu, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

export const MetricsBento: React.FC = () => {
  const metrics = [
    {
      value: '99.2%',
      label: 'FSTD Simulator Availability',
      description: 'Cessna Grand Caravan 208B, C172 Skyhawk, and Dornier 228 devices'
    },
    {
      value: '100%',
      label: 'KCAA & ICAO Compliance',
      description: 'Zero non-conformances in Qualification Test Guides (QTG) & recurrence checks'
    },
    {
      value: '50+',
      label: 'Aviators Certified Annually',
      description: 'Commercial airline cadets, charter pilots, and recurrent instrument flight checks'
    },
    {
      value: '10+',
      label: 'Years Engineering Track',
      description: 'Aerospace simulation engineering, military turbine overhauls, and robotics'
    }
  ];

  const focusAreas = [
    {
      title: 'Flight Simulation Training Devices (FSTD)',
      scope: 'Kasas Aviation & Think Aviation',
      badge: 'ICAO Doc 9625',
      summary: 'Directing Level D / FSTD maintenance lifecycle, subjective flight evaluation runs, visual collimation alignment, and electronic control loading calibrations under ICAO Doc 9625.',
      details: ['Cessna 208B Grand Caravan', 'Cessna 172 Skyhawk', 'Dornier 228', 'QTG Recurrent Validation']
    },
    {
      title: 'Defense Systems & Fleet Maintenance',
      scope: 'DEFTEC (Kenya Defense Forces) & Police Airwing',
      badge: 'Airworthiness',
      summary: 'Practical engineering in gas turbine powerplant overhauls, rotorcraft scheduled maintenance (AW139, AW119Kx, Bell 206), and strict airworthiness directives adherence.',
      details: ['Turbine Blisk Analysis', 'Wilson Airport Operations', 'Rotorcraft Avionics', 'Line Maintenance']
    },
    {
      title: 'Autonomous UAVs & Real-Time Telemetry',
      scope: 'Kenyatta University (JFK Drone) & RotoCop',
      badge: 'Autonomous Systems',
      summary: 'Architecting custom autonomous UAV airframes, Pixhawk/ArduPilot autopilots, 15km line-of-sight RF telemetry links, and fail-safe return-to-launch (RTL) state machines.',
      details: ['ArduPilot & PX4 Autopilots', 'RF Data Links (915MHz/433MHz)', 'Fail-safe State Machines', 'Telemetry Ingestion']
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200">
      {/* Metric Ledger */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-slate-200">
        {metrics.map((m, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {m.value}
            </div>
            <div className="font-sans text-xs font-bold uppercase tracking-wider text-blue-800">
              {m.label}
            </div>
            <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed pt-0.5">
              {m.description}
            </p>
          </div>
        ))}
      </div>

      {/* Core Engineering Divisions */}
      <div className="pt-12">
        <div className="mb-8">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">
            Specialized Practice
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Primary Engineering & Regulatory Domains
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            High-integrity execution across commercial aviation simulation certification, military turbine overhauls, and autonomous aerial robotics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-sans text-[11px] font-semibold text-slate-500">
                    {area.scope}
                  </span>
                  <span className="px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                    {area.badge}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-slate-900 mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.summary}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                {area.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs font-sans text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
