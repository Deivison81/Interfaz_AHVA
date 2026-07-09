using System;
using System.Collections.Generic;
using CNPE.MODELS.Models;
using Microsoft.EntityFrameworkCore;

namespace CNPE.PERSITENCE.Dbcontext;

public partial class CnpeBdContext : DbContext
{
    public CnpeBdContext()
    {
    }

    public CnpeBdContext(DbContextOptions<CnpeBdContext> options)
        : base(options)
    {
    }

    public virtual DbSet<LogsAuditorium> LogsAuditoria { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

//    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Server=DEV-FULLSTACK;Database=CNPE_BD;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<LogsAuditorium>(entity =>
        {
            entity.HasKey(e => e.LogId).HasName("PK__LogsAudi__5E548648B7E5FD37");

            entity.Property(e => e.Accion)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Detalle).IsUnicode(false);
            entity.Property(e => e.DireccionIp)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("DireccionIP");
            entity.Property(e => e.FechaRegistro)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Usuario).WithMany(p => p.LogsAuditoria)
                .HasForeignKey(d => d.UsuarioId)
                .HasConstraintName("FK__LogsAudit__Usuar__3E52440B");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UsuarioId).HasName("PK__Usuarios__2B3DE7B8ED3122EC");

            entity.HasIndex(e => e.NumeroDocumento, "UQ__Usuarios__A4202588E57E7157").IsUnique();

            entity.Property(e => e.BloqueadoHasta).HasColumnType("datetime");
            entity.Property(e => e.Cargo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CorreoPrincipal)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.CorreoSecundario)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.CreadoPor)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Entidad)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.EsActivo).HasDefaultValue(true);
            entity.Property(e => e.FechaCreacion)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FechaModificacion).HasColumnType("datetime");
            entity.Property(e => e.IntentosFallidos).HasDefaultValue(0);
            entity.Property(e => e.ModificadoPor)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Nacionalidad)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Nombres)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.NumeroDocumento)
                .HasMaxLength(12)
                .IsUnicode(false);
            entity.Property(e => e.PasswordHash)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PrimerApellido)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.SegundoApellido)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Sexo)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.TelefonoMovil)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.TelefonoSecundario)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.TelefonoSecundarioTipo)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.TipoContratacion)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TipoDocumento)
                .HasMaxLength(3)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
